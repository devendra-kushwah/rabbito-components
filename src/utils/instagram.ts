interface InstagramPost {
    id: string;
    media_type: string;
    media_url: string;
    permalink: string;
    caption?: string;
    thumbnail_url?: string;
}

interface InstagramApiResponse {
    data: InstagramPost[];
    paging: {
        cursors: {
            before: string;
            after: string;
        };
        next: string;
    };
}

export const fetchInstagramFeed = async (accessToken: string, limit = 8): Promise<InstagramPost[]> => {
    try {
        const response = await fetch(
            `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url&limit=${limit}&access_token=${accessToken}`
        );

        if (!response.ok) {
            throw new Error('Failed to fetch Instagram feed');
        }

        const data: InstagramApiResponse = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error fetching Instagram feed:', error);
        return [];
    }
};

export const transformInstagramPosts = (posts: InstagramPost[]) => {
    return posts.map(post => ({
        id: post.id,
        mediaType: post.media_type as 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM',
        mediaUrl: post.media_url,
        permalink: post.permalink,
        caption: post.caption,
        thumbnail: post.thumbnail_url
    }));
};