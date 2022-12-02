const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."]
const fortunes = [
    'A gambler not only will lose what he has, but also will lose what he doesn’t have.', 
    'A golden egg of opportunity falls into your lap this month.', 
    'All will go well with your new project.',
    'A lifetime friend shall soon be made.',
    'Chance favors those in motion.']   


module.exports = {

    getFortune: (req, res) => {
        // choose random fortune
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },

    getCompliment: (req, res) => {
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    showAllCompliments: (req, res) => {
        res.status(200).send(compliments);
    },

    addCompliment: (req, res) => {
        console.log('addcompliment in controller')
        let { newCompliment } = req.body
        compliments.push(newCompliment)
        res.status(200).send(compliments);
    },

    updateCompliment: (req, res) => {
        // console.log('update compliment controller')
        // console.log(req.params)
        // console.log(req.query)
        // console.log(req.body)

        let {index, newCompliment} = req.body
        compliments.splice(index, 1, newCompliment)
        // console.log(compliments)
        res.status(200).send(compliments);
        
    },

    deleteCompliment: (req, res) => {
        let { index } = req.params
        compliments.splice(index,1)
        res.status(200).send(compliments)
    }

}