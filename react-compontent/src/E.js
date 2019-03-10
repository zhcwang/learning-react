
import React from 'react';

function E(WrappedComponent) {

    return class E extends WrappedComponent {
        static displayName = `NEW_COMPONTENT(${getDisplayName(WrappedComponent)})`;
        componentWillMount(){
            console.log("E组件生命周期,覆盖子组件的生命周期")
        };
        render() {
            const element = super.render();
            const newStyle = {
                color: element.type === 'div' ? "red" : "green"
            };
            const newProp = {...this.props, style: newStyle};
            return React.cloneElement(element, newProp, element.props.children);
        }
    }
}

function getDisplayName(WrappedComponent){
    return WrappedComponent.displayName || WrappedComponent.name  || "Compontent";
}

export default E;
