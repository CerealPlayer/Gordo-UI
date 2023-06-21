import AutoComplete from './AutoComplete'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: AutoComplete,
  title: 'GordoUI/Autocomplete',
  tags: ['autodocs'],
} satisfies Meta<typeof AutoComplete>

export default meta

type Story = StoryObj<typeof meta>

export const primary: Story = {
  // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
  args: {
    options: [
      'The Shawshank Redemption',
      'The Godfather',
      'The Godfather: Part II',
      'The Dark Knight',
      '12 Angry Men',
      "Schindler's List",
      'Pulp Fiction',
      'The Lord of the Rings: The Return of the King',
      'The Good, the Bad and the Ugly',
      'Fight Club',
      'The Lord of the Rings: The Fellowship of the Ring',
      'Star Wars: Episode V - The Empire Strikes Back',
      'Forrest Gump',
      'Inception',
      'The Lord of the Rings: The Two Towers',
      "One Flew Over the Cuckoo's Nest",
      'Goodfellas',
      'The Matrix',
      'Seven Samurai',
      'Star Wars: Episode IV - A New Hope',
      'City of God',
      'Se7en',
      'The Silence of the Lambs',
      "It's a Wonderful Life",
      'Life Is Beautiful',
      'The Usual Suspects',
      'Léon: The Professional',
      'Spirited Away',
      'Saving Private Ryan',
      'Once Upon a Time in the West',
      'American History X',
      'Interstellar',
      'Casablanca',
      'City Lights',
      'Psycho',
      'The Green Mile',
      'The Intouchables',
      'Modern Times',
      'Raiders of the Lost Ark',
      'Rear Window',
      'The Pianist',
      'The Departed',
      'Terminator 2: Judgment Day',
      'Back to the Future',
      'Whiplash',
      'Gladiator',
      'Memento',
      'The Prestige',
      'The Lion King',
      'Apocalypse Now',
      'Alien',
      'Sunset Boulevard',
      'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
      'The Great Dictator',
      'Cinema Paradiso',
      'The Lives of Others',
      'Grave of the Fireflies',
      'Paths of Glory',
      'Django Unchained',
      'The Shining',
      'WALL·E',
      'American Beauty',
      'The Dark Knight Rises',
      'Princess Mononoke',
      'Aliens',
      'Oldboy',
      'Once Upon a Time in America',
      'Witness for the Prosecution',
      'Das Boot',
      'Citizen Kane',
      'North by Northwest',
      'Vertigo',
      'Star Wars: Episode VI - Return of the Jedi',
      'Reservoir Dogs',
      'Braveheart',
      'M',
      'Requiem for a Dream',
      'Amélie',
      'A Clockwork Orange',
      'Like Stars on Earth',
      'Taxi Driver',
      'Lawrence of Arabia',
      'Double Indemnity',
      'Eternal Sunshine of the Spotless Mind',
      'Amadeus',
      'To Kill a Mockingbird',
      'Toy Story 3',
      'Logan',
      'Full Metal Jacket',
      'Dangal',
      'The Sting',
      '2001: A Space Odyssey',
      'Singin in the Rain',
      'Toy Story',
      'Bicycle Thieves',
      'The Kid',
      'Inglourious Basterds',
      'Snatch',
      '3 Idiots',
      'Monty Python and the Holy Grail',
    ],
    label: 'Peliculas',
    classes: { inputClassname: 'border' },
    onInputChange(ev, newValue) {
      const target = ev.currentTarget
      console.log(target.value)
      console.log(newValue)
    },
  },
}
const timeSlots = Array.from(new Array(24 * 2)).map(
  (_, index) =>
    `${index < 20 ? '0' : ''}${Math.floor(index / 2)}:${
      index % 2 === 0 ? '00' : '30'
    }`
)
export const hours: Story = {
  args: {
    options: timeSlots,
    classes: { inputClassname: 'bg-slate-400 ' },
    label: 'Horas',
  },
}
