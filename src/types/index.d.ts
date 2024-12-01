/*
 * Copyright (c) 2024 by frostime. All Rights Reserved.
 * @Author       : frostime
 * @Date         : 2023-08-15 10:28:10
 * @FilePath     : /src/types/index.d.ts
 * @LastEditTime : 2024-06-08 20:50:53
 * @Description  : Frequently used data structures in SiYuan
 */


type DocumentId = string;
type BlockId = string;
type NotebookId = string;
type PreviousID = BlockId;
type ParentID = BlockId | DocumentId;

type Notebook = {
    id: NotebookId;
    name: string;
    icon: string;
    sort: number;
    closed: boolean;
}

type NotebookConf = {
    name: string;
    closed: boolean;
    refCreateSavePath: string;
    createDocNameTemplate: string;
    dailyNoteSavePath: string;
    dailyNoteTemplatePath: string;
}

type BlockType = 
    | 'd'
    | 'p'
    | 'query_embed'
    | 'l'
    | 'i'
    | 'h'
    | 'iframe'
    | 'tb'
    | 'b'
    | 's'
    | 'c'
    | 'widget'
    | 't'
    | 'html'
    | 'm'
    | 'av'
    | 'audio';


type BlockSubType = "d1" | "d2" | "s1" | "s2" | "s3" | "t1" | "t2" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "table" | "task" | "toggle" | "latex" | "quote" | "html" | "code" | "footnote" | "cite" | "collection" | "bookmark" | "attachment" | "comment" | "mindmap" | "spreadsheet" | "calendar" | "image" | "audio" | "video" | "other";

type Block = {
    id: BlockId;
    parent_id?: BlockId;
    root_id: DocumentId;
    hash: string;
    box: string;
    path: string;
    hpath: string;
    name: string;
    alias: string;
    memo: string;
    tag: string;
    content: string;
    fcontent?: string;
    markdown: string;
    length: number;
    type: BlockType;
    subtype: BlockSubType;
    /** string of { [key: string]: string } 
     * For instance: "{: custom-type=\"query-code\" id=\"20230613234017-zkw3pr0\" updated=\"20230613234509\"}" 
     */
    ial?: string;
    sort: number;
    created: string;
    updated: string;
}

type doOperation = {
    action: string;
    data: string;
    id: BlockId;
    parentID: BlockId | DocumentId;
    previousID: BlockId;
    retData: null;
}

interface Window {
    siyuan: {
        config: any;
        notebooks: any;
        menus: any;
        dialogs: any;
        blockPanels: any;
        storage: any;
        user: any;
        ws: any;
        languages: any;
        emojis: any;
        layout?: {
            layout?: Layout,
            centerLayout?: Layout,
        }
    };
    Lute: any;
}

interface Wnd {
    private app: App;
    public id: string;
    public parent?: Layout;
    public element: HTMLElement;
    public headersElement: HTMLElement;
    public children: Tab[] = [];
    // public resize?: Config.TUILayoutDirection;

    public showHeading();
    public split(direction: string): Wnd;
    public addTab(tab: Tab);
}

interface Tab {
    public parent: Wnd;
    public id: string;
    public headElement: HTMLElement;
    public panelElement: HTMLElement;
    public callback: (tab: Tab) => void;
    public model: Model;
    public title: string;
    public icon: string;
    public docIcon: string;
}

interface Layout {
    public element: HTMLElement;
    public children?: Array<Layout | Wnd>;
    public parent?: Layout;
    public direction: string;
    // public direction: Config.TUILayoutDirection;
    // public type?: Config.TUILayoutType;
    public id?: string;
    // public resize?: Config.TUILayoutDirection;
    public size?: string;
}

interface IOpenFileOptions {
    // app: import("../index").App,
    // searchData?: Config.IUILayoutTabSearchConfig, // 搜索必填
    // // card 和自定义页签 必填
    // custom?: {
    //     title: string,
    //     icon: string,
    //     data?: any
    //     id: string,
    //     fn?: (options: {
    //         tab: import("../layout/Tab").Tab,
    //         data: any,
    //     }) => import("../layout/Model").Model,   // plugin 0.8.3 历史兼容
    // }
    // assetPath?: string, // asset 必填
    // fileName?: string, // file 必填
    // rootIcon?: string, // 文档图标
    // id?: string,  // file 必填
    // rootID?: string, // file 必填
    position?: string, // file 或者 asset，打开位置
    // page?: number | string, // asset
    // mode?: TEditorMode // file
    // action?: TProtyleAction[]
    // keepCursor?: boolean // file，是否跳转到新 tab 上
    // zoomIn?: boolean // 是否缩放
    // removeCurrentTab?: boolean // 在当前页签打开时需移除原有页签
    // afterOpen?: (model?: import("../layout/Model").Model) => void // 打开后回调
}