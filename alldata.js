function AllData(){
    const ctx = React.useContext(userContext);
    return(
        <>
        <h1>AllData Component</h1>
        {JSON.stringify(ctx)}
        </>
    )
}