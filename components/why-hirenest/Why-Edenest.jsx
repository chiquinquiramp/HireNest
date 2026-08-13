
function WhyEdeNest () {

    const reasons = [
        {
        title: "",
        description: "..."
    },
    {
        title: "",
        description: "..."
    }]
    return (
    <>
    {reasons.map((reason) => (
        <div key={reason.title}>
            <h3>{reason.title}</h3>
            <p>{reason.description}</p>
        </div>
    ))}
    </>
    );
}

export default WhyEdenest;
