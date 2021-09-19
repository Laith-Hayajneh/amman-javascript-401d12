import Content from './Content';
import useTitle from './hooks/title';

function App() {
    const changeTitle = useTitle();
    // const changeTitle = (title) => (document.title = title);
    
    return (
        <Content hello='hello world!' changeTitle={changeTitle} />
    );
}

export default App;