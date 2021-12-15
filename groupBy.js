const groupBy = (arr, key) => {

    const keyExist = new Error('Key does not exist'),
          keyError = new TypeError('Key is not provided'),
          arrayError = new TypeError('Array is not provided');

    keyExist.name = "keyExist"

    try{
        if(!Array.isArray(arr) || !arr.length) {
            throw arrayError;
        }
    } catch (error) {
        if (error.name === "TypeError") {
            console.log("Error: " + error.message);
            return error
        } else {
            throw error;
        }
    }

    try{
        if(!key || !key.length) {
            throw keyError;
        }
    } catch (error) {
        if (error.name.toString() === "TypeError") {
            console.log("Error: " + error.message);
            return error
        } else {
            throw error;
        }
    }

    const propSet = new Set();

    try {
        arr.map((obj) => {
            if (!(key in obj)) {
                throw keyExist;
            }
            propSet.add(obj[key]); // Add values of key props in set
        })
    }
    catch (error) {
        if (error.name.toString() === "keyExist") {
            console.log("Error: " + error.message);
            return {};
        } else {
            throw error;
        }
    }

    const arrFromSet = Array.from(propSet); // convert set to array

    let result = toObject(arrFromSet) // convert array to object template)

    for (let property in result) {
        let array = arr.filter((item) => item[key] === property);
        result[property] = [...array];
    }

    function toObject(array) { // return object template
        let objTemplate = {};
        for (let i = 0; i < array.length; ++i) {
            objTemplate[array[i]] = []; // key - props, values - empty array
        }
        return objTemplate;
    }

    return result;
}

const example = [
    {id: 1, universe: "marvel", name: "Spider Man"},
    {id: 2, universe: "marvel", name: "Iron Man"},
    {id: 3, universe: "dc", name: "Aqua Man"},
    {id: 4, universe: "dc", name: "Bat Man"},
    {id: 5, universe: "marvel", name: "Hulk"}
];

groupBy(example, "universe");