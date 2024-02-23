function preloaderOn () {
    return {
        type: 'PRELOADER_ON'
    }
}

function preloaderOff () {
    return {
        type: 'PRELOADER_OFF'
    }
}
export function  addGadgetAction (object) {
    return async function (dispatch){

        dispatch(preloaderOn())

        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'appliction/json'
            },
            body: JSON.stringify(object)
        }

        const response = await fetch('https://reqres.in/api/users', options)

        if (response.status >= 200 || response.status <= 204){
            dispatch(preloaderOff())
        }
        else if (response.status === 404) {
            dispatch(preloaderOff())
        }
    }
}
