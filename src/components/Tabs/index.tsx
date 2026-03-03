"use client";
import React from "react";
import { Tabs } from "antd";

export type TabItem = {
    key: string;
    label: React.ReactNode;
    children?: React.ReactNode;
};

export type TabsProps = {
    items: TabItem[];
    defaultActiveKey?: string;
    centered?: boolean;
};

const SharedTabs: React.FC<TabsProps> = ({ items, defaultActiveKey, centered = false }) => {
    const antdItems = items.map((it) => ({ key: it.key, label: it.label, children: it.children }));
    return (
        <Tabs items={antdItems} defaultActiveKey={defaultActiveKey} centered={centered} />
    );
};

export default SharedTabs;
