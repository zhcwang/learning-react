import React, {Component} from 'react';
import ThemeContext from "./ThemeContext";


const ThemeBar = () =>{
    return (
        <ThemeContext.Consumer>
            {
              theme => {
                 return(
                     <div className="alert mt-5" style={{backgroundColor:theme.bgColor}}>
                        主题颜色
                    </div>
                 )
              }
            }
        </ThemeContext.Consumer>
    )
};

export  default  ThemeBar;
