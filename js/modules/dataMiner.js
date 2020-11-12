let errorCodes = {
    404: "Not Found! Oh noes! Check you URL",
    500: "Ya the server is just broken",
    403: "You shall not pass! Unless you have creds. Then sure go ahead.",
    503: "Service is unavailable! The serves are all having a coffee break."

}
async function fectchData(sourceURL) {
    let resource = await fetch(sourceURL).then(response => {
        if (response.status !== 200) {
            throw new Error(`Danger Will Robinson! Error ${response.status}: ${errorCodes[response.status]}`);

        }
        return response;
    });
    let dataset = await resource.json();

    return dataset[0];

    debugger;
}
async function postData(sourceURL) {
    return "You are using the postData API endpoint";
}
export {fectchData, postData};