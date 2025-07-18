export const Celda = (prop) => {
	return (
		<div
			className="m-2 p-3 border border-2 border-dark rounded"
			style={{ fontSize: "50px", backgroundColor: "#0f0f0f" }}
		>
			{prop.text}
		</div>
	)
}