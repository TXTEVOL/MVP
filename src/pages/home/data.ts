export class dataProvider {
    constructor() {

    }

    public db = [
        {
            "title": "TXT",
            "description": "We inspire young at risk Black and Brown boys to become technology entrepreneurs. These boys are at the highest risk of dropping out of HS and being incarcerated.",
            "category": [
                "technology",
                "educational"
            ],
            "favorite": false
        },
        {
            "title": "A Place Called Home",
            "description": "A Place Called Home provides a safe, nurturing environment with proven programs in arts, education, and wellness for the young people in South Central Los Angeles to help them improve their economic conditions and develop healthy, fulfilling and purposeful lives.",
            "category": [
                "educational",
                "art"
            ],
            "favorite": false
        },
        {
            "title": "Project Fashion",
            "description": "Do you dream of being a designer, stylist, or the next Anna Wintour? Then join us at the Fashion Institute of Design and Merchandising (FiDM) to see what it takes to have a career in fashion. ",
            "category": [
                "fashion"
            ],
            "favorite": false
        },
        {
            "title": "Otis College of Art and Design: Summer of Art, College Preparation Program",
            "description": "Four-week, pre-college art & design program designed to develop your artistic and creative skills. Serious young artists seeking to strengthen and enhance their art and design skills, as well as students with limited art training, are invited to participate.",
            "category": [
                "educational",
                "college",
                "art"
            ],
            "favorite": false
        },
        {
            "title": "Model United Nations Institute at UCLA",
            "description": "At the MUN Institute, students improve their public speaking and communication skills, explore their interest in international affairs, and make friends from around the world.",
            "category": [
                "educational"
            ],
            "favorite": false
        },
        {
            "title": "Teen Counselor in Training Program",
            "description": "The Teen Counselor in Training Program is a leadership program for teens interested in learning new skills and work experience.",
            "category": [
                "educational"
            ],
            "favorite": false
        }
    ]
    async filterItems(searchTerm) {
        await this.db;
        return this.db.filter((program) => {
            return program.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    }

}