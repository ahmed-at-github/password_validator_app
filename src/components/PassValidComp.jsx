

export default function PassValidComp() {
    return (
        <>
            <div>
                <div className="bg-muted flex column align-center ">
                    <h2 className="larger">Password Strength</h2>
                    <pre className="font-mono">
                        <span>Enter Password:</span> <input className="bd-default" type="text" onChange={0} />
                    </pre>

                    { /*0 ? null : */    (<span>{ }</span>)}
                </div>
            </div>
        </>
    )
}
