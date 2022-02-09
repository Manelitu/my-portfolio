import styled from 'styled-components';

export const Intro = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABZJREFUeNpi2r9//38gYGAEESAAEGAAasgJOgzOKCoAAAAASUVORK5CYII=);
  filter: invert(100);
`;

export const ArrowIcon = styled.img`
  width: 100px;
  transform: rotate(90deg);
  position: absolute;
  bottom: 7%;
`;
