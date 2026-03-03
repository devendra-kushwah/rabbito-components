import styled from 'styled-components';

export const SocialList = styled.div`
  gap: 12px;
  align-items: center;
`;

export const SocialLink = styled.a<{ size?: number; color?: string }>`
  color: ${(p) => p.color || '#fff'};
  font-size: ${(p) => (p.size ? `${p.size}px` : '20px')};
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;