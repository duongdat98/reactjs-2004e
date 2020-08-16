const apis = {
    fetchCounter: () => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({ data: { step: 5 } });
            }, 1000)
        })
    }
}

export default apis