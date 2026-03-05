import React, { ReactNode } from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';
import { InputProps, Input, ButtonProps, MenuProps } from 'antd';
import { ColumnsType, TableProps } from 'antd/es/table';

interface BannerProps$1 {
    message: string;
    description?: string;
    type?: 'success' | 'info' | 'warning' | 'error';
    showIcon?: boolean;
}
declare const AlertBanner: React.FC<BannerProps$1>;

declare const MainHeader: React.FC;

interface BannerProps {
    title?: string;
    subtitle?: string;
    imageSrc: string;
    imageAlt: string;
    imageWidth?: number;
    imageHeight?: number;
    className?: string;
    children?: React.ReactNode;
}
declare const Banner: React.FC<BannerProps>;

interface SliderProps {
    slides?: React.ReactNode[];
    infinite?: boolean;
    autoplaySpeed?: number;
    autoplay?: boolean;
}
declare const Slider: React.FC<SliderProps>;

declare const Footer: React.FC;

declare const HeaderLogo$1: () => react_jsx_runtime.JSX.Element;

declare const HeaderLogo: () => react_jsx_runtime.JSX.Element;

type SocialLinksProps = {
    size?: number;
    color?: string;
    className?: string;
};
declare const SocialLinks: React.FC<SocialLinksProps>;

type TabItem = {
    key: string;
    label: React.ReactNode;
    children?: React.ReactNode;
};
type TabsProps = {
    items: TabItem[];
    defaultActiveKey?: string;
    centered?: boolean;
};
declare const SharedTabs: React.FC<TabsProps>;

type BaseCardProps = {
    children?: ReactNode;
    className?: string;
    bordered?: boolean;
    padding?: string | number;
    elevation?: number;
};
declare const BaseCard: React.FC<BaseCardProps>;

interface WhatsAppChatProps {
    phoneNumber?: string;
    message?: string;
    position?: 'bottomRight' | 'bottomLeft' | 'topRight' | 'topLeft';
    tooltip?: string;
}
declare const WhatsAppChat: React.FC<WhatsAppChatProps>;

interface PageBannerProps {
    title: string;
    subtitle?: string;
    backgroundImage?: {
        src: string;
        alt: string;
    };
    height?: number;
}
declare const PageBanner: React.FC<PageBannerProps>;

interface InformationCardProps {
    title?: string;
    description?: string;
    image?: {
        src: string;
        alt?: string;
        width?: number;
        height: number;
    };
}
declare const InformationCard: React.FC<InformationCardProps>;

interface SectionProps {
    title?: string;
    children: React.ReactNode;
    className?: string;
    titleAlign?: 'left' | 'center' | 'right';
    fluid?: boolean;
}
declare const Section: React.FC<SectionProps>;

type TextInputProps = InputProps & {
    /** Optional wrapper class name around the input */
    wrapperClassName?: string;
    /** Optional label shown above the input */
    label?: React.ReactNode;
    /** If true, renders the label (default true) */
    showLabel?: boolean;
};
type CompoundedComponent = React.ForwardRefExoticComponent<React.PropsWithoutRef<TextInputProps> & React.RefAttributes<HTMLInputElement>> & {
    TextArea: typeof Input.TextArea;
    Search: typeof Input.Search;
    Password: typeof Input.Password;
};
declare const TextInput: CompoundedComponent;

type ButtonColor = ButtonProps['type'] | 'primary' | 'default';
type ButtonVariant = 'solid' | 'outline' | 'text' | (string & {});
declare const Button: React.ForwardRefExoticComponent<Omit<ButtonProps, "type"> & {
    /** color maps to AntD button type (primary, dashed, link, text, ghost, default) */
    color?: ButtonColor;
    /** visual variant */
    variant?: ButtonVariant;
} & React.RefAttributes<HTMLButtonElement>>;

interface DetailedCardProps {
    title?: string;
    subTitle?: string;
    description?: string;
    image?: {
        src: string;
        alt?: string;
        width?: number;
        height: number;
    };
}
declare const DetailedCard: React.FC<DetailedCardProps>;

interface InstagramPost {
    id: string;
    mediaUrl: string;
    permalink: string;
    caption?: string;
    mediaType: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
    thumbnail?: string;
}
interface InstagramFeedProps {
    posts?: InstagramPost[];
    columns?: number;
    loading?: boolean;
    username?: string;
}
declare const InstagramFeed: React.FC<InstagramFeedProps>;

declare const Map: React.FC;

/**
 * Basic reusable Video component
 *
 * Usage example:
 *
 * import Video from 'src/shared-components/Video';
 *
 * <Video
 *   src="/videos/demo.mp4"
 *   poster="/page-banner/preview.jpg"
 *   controls
 *   width={800}
 *   height={450}
 *   className="rounded-lg"
 * />
 */

type VideoProps = {
    src: string;
    poster?: string;
    controls?: boolean;
    autoPlay?: boolean;
    loop?: boolean;
    muted?: boolean;
    width?: number | string;
    height?: number | string;
    className?: string;
    style?: React.CSSProperties;
    onPlay?: () => void;
    onPause?: () => void;
    onEnded?: () => void;
};
declare const Video: React.FC<VideoProps>;

/**
 * Gallery - simple reusable image grid
 *
 * Usage example:
 *
 * import Gallery from 'src/shared-components/Gallery';
 *
 * const images = [
 *   { src: '/slider/photo1.jpg', alt: 'Photo 1' },
 *   { src: '/slider/photo2.jpg', alt: 'Photo 2' },
 *   // ...
 * ];
 *
 * <Gallery images={images} columns={3} gap={12} onImageClick={(img) => console.log(img)} />
 */

type GalleryImage = {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
};
type GalleryProps = {
    images: GalleryImage[];
    columns?: number;
    gap?: number;
    className?: string;
    style?: React.CSSProperties;
    onImageClick?: (img: GalleryImage, index: number) => void;
};
declare const Gallery: React.FC<GalleryProps>;

declare const Navigation: React.FC;

interface MainLayoutProps {
    children?: React.ReactNode;
    items?: MenuProps['items'];
}
declare const MainLayout: React.FC<MainLayoutProps>;

type Key = React.Key;
type DataTableProps<T extends Record<string, any>> = {
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
declare function DataTable<T extends Record<string, any>>({ data, columns, rowKey, loading, pageSize, pagination, onChange, filterKeys, debounceMs, selectable, onSelectionChange, className, localeEmptyText, }: DataTableProps<T>): react_jsx_runtime.JSX.Element;

export { AlertBanner, Banner, BaseCard, Button, DataTable, DetailedCard, Footer, HeaderLogo as FooterLogo, Gallery, HeaderLogo$1 as HeaderLogo, InformationCard, InstagramFeed, MainHeader, MainLayout, Map, Navigation, PageBanner, Section, Slider, SocialLinks, SharedTabs as Tabs, TextInput, Video, WhatsAppChat };
