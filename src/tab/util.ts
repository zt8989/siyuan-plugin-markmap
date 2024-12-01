import { getInstanceById, isInstanceOfTab } from "@/layout/util";

export const getActiveTab = (wndActive = true): Tab => {
    const activeTabElement = document.querySelector(".layout__wnd--active .item--focus");
    let tab;
    if (activeTabElement) {
        tab = getInstanceById(activeTabElement.getAttribute("data-id")) as Tab;
    }
    if (!tab && !wndActive) {
        getAllTabs().find(item => {
            if (item.headElement?.classList.contains("item--focus")) {
                tab = item;
            }
        });
    }
    return tab;
};

export const getAllTabs = () => {
    const tabs: Tab[] = [];
    const getTabs = (layout: Layout) => {
        for (let i = 0; i < layout.children.length; i++) {
            const item = layout.children[i];
            if (isInstanceOfTab(item)) {
                tabs.push(item);
            } else {
                getTabs(item as Layout);
            }
        }
    };

    if (window.siyuan.layout.centerLayout) {
        getTabs(window.siyuan.layout.centerLayout);
    }
    return tabs;
};