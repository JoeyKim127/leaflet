import React from 'react'


const InfoProvider = React.createContext(

)

class InfoProvider extends Component {
    render() {
    return (
        <InfoContext.Provider value="Hello data">
            {this.props.children}
        </InfoContext.Provider>
    )
}
}
export default import('vm').Context;