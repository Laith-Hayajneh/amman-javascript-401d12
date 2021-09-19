function Content(props) {
    return (
        <>
            <h1>{props.hello}</h1>
            <button onClick={() => props.changeTitle('any thing')}>Change Title</button>
        </>
    );
}

export default Content;