var React = require('react');

var Form = React.createClass ({
    render: function () {
        return (
            <div>
                <form>
                    <input type="text"/>
                        <button> Get The Weather Report</button>
                </form>    
            </div>
        );
    }
});

module.exports = Form;
