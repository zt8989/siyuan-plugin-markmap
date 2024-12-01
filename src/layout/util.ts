export const getInstanceById = (id: string, layout = window.siyuan.layout.centerLayout) => {
    const _getInstanceById = (item: Layout | Wnd, id: string) => {
        if (item.id === id) {
            return item;
        }
        if (!item.children) {
            return;
        }
        let ret: Tab | Layout | Wnd;
        for (let i = 0; i < item.children.length; i++) {
            ret = _getInstanceById(item.children[i] as Layout, id) as Tab;
            if (ret) {
                return ret;
            }
        }
    };
    return _getInstanceById(layout, id);
};

export const getWndByLayout: (layout: Layout) => Wnd = (layout: Layout) => {
    const wndsTemp: Wnd[] = [];
    getAllWnds(layout, wndsTemp);
    return wndsTemp.sort((a, b) => {
        if (a.element.querySelector(".fn__flex .item--focus")?.getAttribute("data-activetime") > b.element.querySelector(".fn__flex .item--focus")?.getAttribute("data-activetime")) {
            return -1;
        }
    })[0];
};

export const getAllWnds = (layout: Layout, wnds: Wnd[]) => {
    for (let i = 0; i < layout.children.length; i++) {
        const item = layout.children[i];
        if ("headersElement" in item && "element" in item) {
            wnds.push(item as Wnd);
        } else if (!("headersElement" in item) && "element" in item) {
            getAllWnds(item as Layout, wnds);
        }
    }
};

export const isInstanceOfWnd = (item: any): item is Wnd => {
    return "headersElement" in item && "element" in item 
}

export const isInstanceOfLayout = (item: any): item is Layout => {
    return !("headersElement" in item) && "element" in item
} 

export const isInstanceOfTab = (item: any): item is Tab => {
    return "headersElement" in item && "panelElement" in item
} 