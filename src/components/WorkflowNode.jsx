import styled from 'styled-components';

const NodeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  background: ${props => props.$isDecision ? '#2c3e50' : '#1abc9c'};
  color: white;
  padding: 12px;
  border-radius: 8px;
  width: fit-content;
  position: relative;
  margin: 20px 0;

  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 50%;
    width: 2px;
    height: 20px;
    background: #95a5a6;
    display: ${props => props.$hideConnection ? 'none' : 'block'};
  }
`;

const IconBox = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-weight: 500;
`;

const Subtitle = styled.div`
  font-size: 0.8em;
  opacity: 0.8;
`;

const WorkflowNode = ({ icon, title, subtitle, isDecision, hideConnection }) => {
  return (
    <NodeWrapper $isDecision={isDecision} $hideConnection={hideConnection}>
      <IconBox>{icon}</IconBox>
      <Content>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Content>
    </NodeWrapper>
  );
};

export default WorkflowNode;
