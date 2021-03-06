import { OnChanges, OnInit, OnDestroy, SimpleChange, EventEmitter, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { IObservableCollection, IGridDataRow, IColumnDefinition } from './interfaces';
import { ISlickRange } from './selectionmodel';
export declare class SlickGrid implements OnChanges, OnInit, OnDestroy, AfterViewInit {
    private _el;
    private _gridSyncService;
    columnDefinitions: IColumnDefinition[];
    dataRows: IObservableCollection<IGridDataRow>;
    resized: Observable<any>;
    highlightedCells: {
        row: number;
        column: number;
    }[];
    blurredColumns: string[];
    contextColumns: string[];
    columnsLoading: string[];
    overrideCellFn: (rowNumber, columnId, value?, data?) => string;
    showHeader: boolean;
    showDataTypeIcon: boolean;
    enableColumnReorder: boolean;
    enableAsyncPostRender: boolean;
    selectionModel: string;
    plugins: string[];
    enableEditing: boolean;
    topRowNumber: number;
    isColumnEditable: (column: number) => boolean;
    isCellEditValid: (row: number, column: number, newValue: any) => boolean;
    loadFinished: EventEmitter<void>;
    editingFinished: EventEmitter<any>;
    contextMenu: EventEmitter<{
        x: number;
        y: number;
    }>;
    topRowNumberChange: EventEmitter<number>;
    cellEditBegin: EventEmitter<{
        row: number;
        column: number;
    }>;
    cellEditExit: EventEmitter<{
        row: number;
        column: number;
        newValue: any;
    }>;
    rowEditBegin: EventEmitter<{
        row: number;
    }>;
    rowEditExit: EventEmitter<{
        row: number;
    }>;
    onFocus(): void;
    private _grid;
    private _gridColumns;
    private _columnNameToIndex;
    private _gridData;
    private _rowHeight;
    private _resizeSubscription;
    private _gridSyncSubscription;
    private _topRow;
    private _leftPx;
    private _activeEditingRow;
    private _activeEditingRowHasChanges;
    enterEditSession(): void;
    endEditSession(): void;
    private changeEditSession(enabled);
    getColumnIndex(name: string): number;
    handleEditorCellChange(rowNumber: number): void;
    private static getDataWithSchema(data, columns);
    constructor(_el: any, _gridSyncService: any);
    ngOnChanges(changes: {
        [propName: string]: SimpleChange;
    }): void;
    private invalidateRange(start, end);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    onResize(): void;
    getSelectedRanges(): ISlickRange[];
    registerPlugin(plugin: string): void;
    setActive(): void;
    selection: ISlickRange[] | boolean;
    private getColumnEditor;
    private getFormatter;
    private initGrid();
    private subscribeToScroll();
    private subscribeToCellChanged();
    private subscribeToBeforeEditCell();
    private subscribeToActiveCellChanged();
    private updateColumnWidths();
    subscribeToContextMenu(): void;
    private updateSchema();
    private getImagePathForDataType(type);
    private setCallbackOnDataRowsChanged();
    private renderGridDataRowsRange(startIndex, count);
}
