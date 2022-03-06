const yargs = require("yargs");

const { sequelize } = require("./db/connection");
const { addMovie, listMovies, deleteMovie, updateMovie } = require("./movie/movieFunctions");
const { addActor, listActors, deleteActor, updateActor } = require("./actors/actorsFunctions");


//Testing if the connection is working
// console.log(sequelize);

//DEFINE RELATIONSHIPS HERE?
//e.g. Movie.hasMany()???


//Creating object
const app = async (yargsObj) => {
    try {
        await sequelize.sync();
        if(yargsObj.add) {
            await addMovie( { title: yargsObj.title, actor: yargsObj.actor});
            console.log(JSON.stringify(await listMovies(), null, 2));
        } else if (yargsObj.list) {
            //Use square brackets to target a key e.g. [yargsObj.key]
            console.log(JSON.stringify(await listMovies( { [yargsObj.key]: yargsObj.value } ), null, 2));
        } else if (yargsObj.update) {
            console.log(JSON.stringify(await updateMovie(yargsObj), null, 2));
        } else if (yargsObj.delete) {
            console.log(JSON.stringify(await deleteMovie({ title: yargsObj.title })));
         
        } else if(yargsObj.addActor) {
            await addActor( { actorName: yargsObj.actorName, actorAge: yargsObj.actorAge});
            console.log(JSON.stringify(await listActors(), null, 2));
        } else if (yargsObj.listActors) {
            //Use square brackets to target a key e.g. [yargsObj.key]
            console.log(JSON.stringify(await listActors( { [yargsObj.key]: yargsObj.value } ), null, 2));
        } else if (yargsObj.updateActor) {
            console.log(JSON.stringify(await updateActor(yargsObj), null, 2));
        } else if (yargsObj.deleteActor) {
            console.log(JSON.stringify(await deleteActor({ actorName: yargsObj.actorName })));
            
        } else {
            console.log("Incorrect command");
        }
        await sequelize.close();
    } catch (error) {
        console.log(error);
    }
};

//To create a Movie instance - node src/app.js --add --title "Jaws3" --actor "Roy"
//To search table (in terminal) - node src/app.js --list --key "title" --value "Jaws"
//To update the title e.g. - node src/app.js --update --newTitle "Sharknado" --oldTitle "Jaws3"
//To update the actor - node src/app.js --update --newActor "Mr. Bean" --oldActor "Roy"
//To delete by title - node src/app.js --delete --title "Jaws2"

app (yargs.argv);