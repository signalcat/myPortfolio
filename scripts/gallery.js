var ImageBox = React.createClass({
	render: function() {
		return (
			<div className="imageBox">
				This is a Image Box.
			</div>
		);
	}
});

ReactDOM.render(
	<ImageBox />,
	document.getElementById('content-image')
);