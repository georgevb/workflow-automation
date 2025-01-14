import styled from 'styled-components';

const BranchWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;
  position: relative;
  margin-top: 20px;

  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 20px;
    background: #95a5a6;
  }
`;

const Branch = styled.div`
  position: relative;
  padding-top: 20px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: ${props => props.$side === 'left' ? '50%' : '50%'};
    height: 2px;
    background: #95a5a6;
    ${props => props.$side === 'left' ? 'right: 0;' : 'left: 0;'}
  }
`;

const DecisionBranch = ({ leftBranch, rightBranch }) => {
  return (
    <BranchWrapper>
      <Branch $side="left">
        {leftBranch}
      </Branch>
      <Branch $side="right">
        {rightBranch}
      </Branch>
    </BranchWrapper>
  );
};

export default DecisionBranch;
