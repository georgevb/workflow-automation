import styled from 'styled-components';
import WorkflowNode from './components/WorkflowNode';
import DecisionBranch from './components/DecisionBranch';

const WorkflowContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background: #f8f9fa;
  min-height: 100vh;
`;

const GlobalStyle = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  }
`;

function App() {
  return (
    <GlobalStyle>
      <WorkflowContainer>
        <WorkflowNode
          icon="📍"
          title="Lead source"
          subtitle=""
        />
        <WorkflowNode
          icon="📱"
          title="Invite to connect"
          subtitle="0 days 0 hours"
        />
        <WorkflowNode
          icon="👤"
          title="View profile"
          subtitle="0.1 days 0 hours"
        />
        <WorkflowNode
          icon="🔍"
          title="Find & verify business"
          subtitle="0 days 0 hours"
        />
        <WorkflowNode
          icon="⚡"
          title="If connected"
          subtitle="0.14 days 0 hours"
          isDecision
        />
        <DecisionBranch
          leftBranch={
            <>
              <WorkflowNode
                icon="✉️"
                title="LinkedIn message"
                subtitle="0 days 0 hours"
              />
              <WorkflowNode
                icon="👤"
                title="View profile"
                subtitle="0 days 0 hours"
              />
              <WorkflowNode
                icon="✉️"
                title="LinkedIn message"
                subtitle="0 days 0 hours"
                hideConnection
              />
            </>
          }
          rightBranch={
            <WorkflowNode
              icon="👤"
              title="View profile"
              subtitle="0 days 0 hours"
              hideConnection
            />
          }
        />
      </WorkflowContainer>
    </GlobalStyle>
  );
}

export default App;
