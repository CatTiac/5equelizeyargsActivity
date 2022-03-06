const Actor = require("./actorsTable");

exports.addActor = async (actorObj) => {
    try {
        await Actor.create(actorObj);
    } catch (error) {
        console.log(error);
    }
};

exports.listActors = async (filterObj) => {
    console.log("filterObj: ", filterObj);
    try {
        if (filterObj.actor || filterObj.actorAge) {
            return await Actor.findOne({ where: filterObj });
        } else {
            return await Actor.findAll();
        }
    } catch (error) {
        console.log(error);
    }
};

exports.updateActor = async (filterObj) => {
    try {
        if (filterObj.newName ) {
        return await Actor.update(
            { actor: filterObj.newName },
            { where: 
                { actor: filterObj.oldName } });
        } else if (filterObj.newAge) {
        return await Actor.update(
            { actorAge: filterObj.newAge },
            { where: 
                { actorAge: filterObj.oldAge } });
        } else {
            console.log("Nope");
        };
    } catch (error) {
        console.log(error);
    }
};

exports.deleteActor = async (actor) => {
    //Deletes an item from the database
    try {
        return await Actor.destroy({ where: actor });
    } catch (error) {
        console.log(error);
    }
};