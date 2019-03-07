import React, {Component} from 'react';
import ThemeContext from "./ThemeContext";
import  ThemeBar from "./ThemeBar";
const themes = {
    light : {
        bgColor : '#FFF'
    },
    dark : {
        bgColor : '#000'
    }
};
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "value": ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            "value": event.target.value
        });
    }

    handleSubmit(e) {
        alert(this.state.value);
        e.preventDefault();
    }

    render() {
        return (
            <ThemeContext.Provider value={themes.light}>
                <form className='p-5' onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <label>留言内容</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="请输入内容"
                            value={this.state.value}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button type={"submit"} className={"btn btn-primary"}>留言</button>
                </form>
                <ThemeBar/>
            </ThemeContext.Provider>
        );
    }
}

export default App;
