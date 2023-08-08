import SearchBar from "./SearchBar"

function NavBar(props){
    return(
        <nav class="navbar navbar-light bg-light" id="main-nav">
            <a class="navbar-brand" id="logo" href="/">SOAPScribe</a>
            <div style={{'margin-top': 10, 'display': 'flex', 
            'flex-direction': 'row'}}>
                <h5 style={{'padding-bottom': 8, 'padding-top': 8, 'margin-bottom': 10, 'margin-right': 10}}>
                    AI powered SOAP notes
                </h5>
                <SearchBar setData={props.setData}></SearchBar>
            </div>
        </nav>
    )
}

export default NavBar