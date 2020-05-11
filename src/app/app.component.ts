import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { VideoService } from './video.service';
import { ImageFormatterComponent } from "./image-formatter/image-formatter.component";
import { UrlFormatterComponent } from "./url-formatter/url-formatter.component";
import { AgGridAngular } from 'ag-grid-angular';

export interface Video {
  etag: string;
  items: Array < {} >;
  kind: string;
  nextPageToken: string;
  pageInfo: { resultsPerPage: number, totalResults: number };
  regionCode: string;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('agGrid') agGrid: AgGridAngular;
  title = 'my-app';
  videos: any = [];
  paginationPageSize = 10;
  count = 0;
  selectedCount = 0;

  gridOptions = {
    domLayout: 'autoHeight',
    rowHeight: 90,
    defaultColDef: {
      resizable: true,
      headerCheckboxSelection: this.isFirstColumn,
      checkboxSelection: this.isFirstColumn,
    },
    rowSelection: "multiple",
    rowMultiSelectWithClick: true,
    pagination: true
  };

  columnDefs = [
    { headerName: '', field: 'thumbnail', width: 120, cellRendererFramework: ImageFormatterComponent },
    { headerName: 'Published on', field: 'publishedAt', sortable: true },
    { headerName: 'Video Title', field: 'title', sortable: true, cellRendererFramework: UrlFormatterComponent },
    { headerName: 'Description', field: 'description', sortable: true }
  ];

  rowData = [];

  constructor(private videoService: VideoService) {
    videoService.fetchVideos().subscribe((data: Video) => {
      this.videos = data.items;      
      this.count = this.videos.length;
      this.videos.map((video) => {
        this.rowData = [...this.rowData, { thumbnail: video.snippet.thumbnails.default, publishedAt: video.snippet.publishedAt, title: { title: video.snippet.title, href: "https://www.youtube.com/watch?v=" + video.id.videoId }, description: video.snippet.description }];
      });
    });
  }

  toggleSelection() {
    let selectedNodes = this.agGrid.api.getSelectedNodes();
    this.agGrid.api.selectAll();    
    selectedNodes.map(node => node.setSelected(false));
  }

  onSelectionChanged(event: any) { 
    const rowsSelection = this.agGrid.api.getSelectedRows();
    this.selectedCount = rowsSelection.length;
  }

  onGridReady(params) {
    params.api.sizeColumnsToFit();
  }

  isFirstColumn(params) {
    const displayedColumns = params.columnApi.getAllDisplayedColumns();
    const thisIsFirstColumn = displayedColumns[0] === params.column;
    return thisIsFirstColumn;
  }

  getContextMenuItems(params) {
    
    let result;

    if (params.column.colId === 'title') {
      result = [
        'copy',
        'copyWithHeaders',
        'paste',
        {
          name: 'Open in new tab',
          shortcut: 'Alt + O',
          action: function () {
            console.log('Windows Item Selected');
            window.open(params.value.href, "_blank");
          },
        },
      ];
    } else {
      result = [
        'copy',
        'copyWithHeaders',
        'paste',
      ];
    }

    return result;
  }
}
