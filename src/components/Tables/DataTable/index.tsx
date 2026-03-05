"use client";
import React from 'react';
import { Table, Input, Tooltip, Space } from 'antd';
import type { TableProps, ColumnType, ColumnsType } from 'antd/es/table';


type Key = React.Key;

export type DataTableProps<T extends Record<string, any>> = {
  data: T[];
  columns?: ColumnsType<T>;
  rowKey?: string | ((record: T) => Key);
  loading?: boolean;
  pageSize?: number;
  pagination?: TableProps<T>['pagination'];
  onChange?: TableProps<T>['onChange'];
  filterKeys?: (keyof T)[];
  debounceMs?: number;
  selectable?: boolean;
  onSelectionChange?: (selectedRowKeys: Key[], selectedRows: T[]) => void;
  className?: string;
  localeEmptyText?: React.ReactNode;
};

function useDebouncedValue<T>(value: T, ms = 250) {
  const [state, setState] = React.useState(value);
  React.useEffect(() => {
    const id = setTimeout(() => setState(value), ms);
    return () => clearTimeout(id);
  }, [value, ms]);
  return state;
}

function defaultColumns<T extends Record<string, any>>(): ColumnsType<T> {
  return [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      sorter: (a: any, b: any) => (String(a.id) > String(b.id) ? 1 : -1),
      width: 80,
    },
    {
      title: 'Created',
      dataIndex: 'createdAt',
      key: 'createdAt',
      sorter: true,
      render: (v: any) => (v ? new Date(v).toLocaleDateString() : '-'),
      width: 140,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: true,
      render: (v: any) => (
        <Tooltip title={v}><span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-block', maxWidth: 200 }}>{v}</span></Tooltip>
      ),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      render: (v: any) => (
        <Tooltip title={v}><span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-block', maxWidth: 220 }}>{v}</span></Tooltip>
      ),
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
    },

  ];
}

export default function DataTable<T extends Record<string, any>>({
  data,
  columns,
  rowKey = 'id',
  loading = false,
  pageSize = 10,
  pagination = { pageSize } as TableProps<T>['pagination'],
  onChange,
  filterKeys = ['name', 'email', 'role'] as (keyof T)[],
  debounceMs = 250,
  selectable = false,
  onSelectionChange,
  className,
  localeEmptyText,
}: DataTableProps<T>) {
  const [query, setQuery] = React.useState('');
  const debouncedQuery = useDebouncedValue(query, debounceMs);

  const filtered = React.useMemo(() => {
    if (!debouncedQuery) return data;
    const q = String(debouncedQuery).toLowerCase();
    return data.filter((row) =>
      filterKeys.some((k) => {
        const v = row[k as string];
        return v != null && String(v).toLowerCase().includes(q);
      }),
    );
  }, [data, debouncedQuery, filterKeys]);

  const cols = React.useMemo(() => (columns && columns.length > 0 ? columns : defaultColumns<T>()), [columns]);

  const rowSelection = React.useMemo(() => {
    if (!selectable) return undefined;
    return {
      onChange: onSelectionChange,
    } as TableProps<T>['rowSelection'];
  }, [selectable, onSelectionChange]);

  return (
    <div className={className}>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Input.Search
          placeholder="Search..."
          allowClear
          enterButton={false}
          aria-label="Data table global search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <Table<T>
          columns={cols}
          dataSource={filtered}
          rowKey={rowKey as any}
          loading={loading}
          pagination={pagination}
          onChange={onChange}
          rowSelection={rowSelection}
          locale={localeEmptyText ? { emptyText: localeEmptyText } : undefined}
        />
      </Space>
    </div>
  );
}
