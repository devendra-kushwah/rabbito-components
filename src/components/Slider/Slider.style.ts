import styled, { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const SliderContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
`;

export const Slide = styled.div<{ active: boolean }>`
  display: ${props => (props.active ? 'block' : 'none')};
  width: 100%;
  animation: ${fadeIn} 0.7s ease;
`;

export const SlideContent = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  padding: 2rem 2.5rem;
  min-height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(23,102,181,0.85);
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 2;
  transition: background 0.2s;
  &:hover {
    background: #1766b5;
  }
`;

export const ArrowLeft = styled(ArrowButton)`
  left: 16px;
`;

export const ArrowRight = styled(ArrowButton)`
  right: 16px;
`;

export const Dots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  gap: 0.5rem;
`;

export const Dot = styled.button<{ active: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: ${props => (props.active ? '#1766b5' : '#cfd8dc')};
  cursor: pointer;
  transition: background 0.2s;
`; 