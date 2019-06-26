export default [
  {
    title: "Atrocious Art Show",
    getWord: function(key) {
      return this.words.find((word) => {
        return word.key === key
      }).value
    },
    getText: function() { 
      return `Last night's art opening at the ${this.getWord('noun_1')} Gallery created quite a stir with a show of portraits by ${this.getWord('first_name_1')} ${this.getWord('last_name_1')}. One gallery visitor commented, "The paintings are ${this.getWord('describing_word_1')}, yet I can't seem to look away. The ${this.getWord('plural_body_part')} in the portraits seem to follow you around the room." A local critic pointed out, "Most people came here to see art. However, I believe many people left feeling they'd seen ${this.getWord('plural_noun_1')}. Others found the artist's work unintentionally ${this.getWord('describing_word_2')}." On a more positive note, one visitor said, "I go to a lot of openings, and sometimes they're pretty stuffy. Not this one. Instead of serving fancy drinks and hors d'oeuvres, this gallery offered ${this.getWord('drink')} and ${this.getWord('kind_of_candy')}."`},
    words: [
      {
        "key": "noun_1",
        "label": "Noun 1"
      },
      {
        "key": "first_name_1",
        "label": "First Name 1"
      },
      {
        "key": "last_name_1",
        "label": "Last Name 1"
      },
      {
        "key": "describing_word_1",
        "label": "Describing Word 1"
      },
      {
        "key": "plural_body_part",
        "label": "Plural Body Part"
      },
      {
        "key": "plural_noun_1",
        "label": "Plural Noun 1"
      },
      {
        "key": "describing_word_2",
        "label": "Describing Word 2"
      },
      {
        "key": "drink",
        "label": "Drink"
      },
      {
        "key": "kind_of_candy",
        "label": "Kind of Candy"
      }
    ]
  },
  {
    title: "Bad Dog",
    getWord: function(key) {
      return this.words.find((word) => {
        return word.key === key
      }).value
    },
    getText: function() { 
      return `After a long day at school, I came home only to find a ${this.getWord('describing_word_1')} mess! The ${this.getWord('noun_1')} was knocked over, spilling ${this.getWord('plural_noun_1')} out onto the floor. The couch was ruined! All of the ${this.getWord('plural_noun_2')} had been pulled out of the cushions. I had a feeling that the culprit was my dog, ${this.getWord('dogs_name_1')}. ${this.getWord('dogs_name_1')} has been acting out lately by ${this.getWord('action_ending_in_ing_1')} while I'm away. The dog is upset with me because I've been taking it to doggie ${this.getWord('type_of_class_1')} classes, which it enjoys about as much as getting a bath. Still, I was so angry with ${this.getWord('dogs_name_1')} that I yelled, ${this.getWord('nonsense_word_1')}! Then I felt ${this.getWord('feeling_1')}, because yelling at the dog is pointless. ${this.getWord('dogs_name_1')}  couldn't possibly know what ${this.getWord('nonsense_word_1')} means, even after taking all those classes.`
    },
    words: [
      {
        "key": "describing_word_1",
        "label": "Describing Word 1"
      },
      {
        "key": "noun_1",
        "label": "Noun 1"
      },
      {
        "key": "plural_noun_1",
        "label": "Plural Noun 1"
      },
      {
        "key": "plural_noun_2",
        "label": "Plural Noun 2"
      },
      {
        "key": "dogs_name_1",
        "label": "Dog's Name 1"
      },
      {
        "key": "action_ending_in_ing_1",
        "label": "Action Ending in –ing 1"
      },
      {
        "key": "type_of_class_1",
        "label": "Type of Class 1"
      },
      {
        "key": "nonsense_word_1",
        "label": "Nonsense Word 1"
      },
      {
        "key": "feeling_1",
        "label": "Feeling 1"
      }
    ]
  },
  {
    title: "Breaking News!",
    getWord: function(key) {
      return this.words.find((word) => {
        return word.key === key
      }).value
    },
    getText: function() { 
      return `NASA reported today that an alien species has landed on Earth near ${this.getWord('your_state_1')}. Scientists have decided to call the aliens "${this.getWord('nonsense_word_1')}." Typical aliens appear to have ${this.getWord('small_number_1')} arms and they wear ${this.getWord('plural_noun_1')} on their heads. They like to eat a food that looks like ${this.getWord('plural_noun_2')}. The noise they make when they’re ${this.getWord('verb_ending_in_ing')} sounds like "${this.getWord('noise_1')}." At this stage, scientists are asking people to avoid alien contact because the aliens have been known to turn things into ${this.getWord('plural_noun_3')}. We advise listeners to stay safe and stay tuned!`
    },
    words: [
      {
        "key": "your_state_1",
        "label": "Your State 1"
      },
      {
        "key": "nonsense_word_1",
        "label": "Nonsense Word 1"
      },
      {
        "key": "small_number_1",
        "label": "Small Number 1"
      },
      {
        "key": "plural_noun_1",
        "label": "Plural Noun 1"
      },
      {
        "key": "plural_noun_2",
        "label": "Plural Noun 2"
      },
      {
        "key": "verb_ending_in_ing",
        "label": "Verb Ending in –ing"
      },
      {
        "key": "noise_1",
        "label": "Noise 1"
      },
      {
        "key": "plural_noun_3",
        "label": "Plural Noun 3"
      }
    ]
  }
]