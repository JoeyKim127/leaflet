import React, {Component} from 'react'

class Home extends Components {
    render() {
        return (
            <div>
                <TotalPoints />
                <CurrentLocation /> 

                <Ads />
                <button>모두 보기</button>


            </div>
        )
    };
};


export default Home;