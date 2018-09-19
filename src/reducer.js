import ACTIONS from './actions'
const initialState = {
  courses: [
    {
      title: 'Deutsch als Fremdsprache A1,1',
      provider: 'vhs',
      number: '182-41001',
      duration: '22.10.2018 - 26.11.2018 ',
      costs: '129,80 €',
      times: 'Montags und Mittwochs, 18:00 - 19:30 Uhr',
      teacher: 'Jane Doe',
      place: 'VHS, Haagestraße 4, 21335 Lüneburg, Raum V2.16',
      text:
        'Sie haben keine Vorkenntnisse und möchten einfache Sätze und Anweisungen verstehen, sich auf einfache Art über notwendige Dinge und Themen verständigen, einen kurzen Text schreiben können und wissen, wie man Formulare ausfüllt? Dieser Kurs vermittelt Ihnen die dazu notwendigen Grundlagen.',
      bookmarked: false,
    },
    {
      title: 'Deutsch als Fremdsprache A2,3',
      number: '185-42227',
      provider: 'vhs',
      duration: '22.10.2018 - 26.11.2018 ',
      costs: '129,80 €',
      times: 'Montags und Mittwochs, 18:00 - 19:30 Uhr',
      teacher: 'John Doe',
      place: 'VHS, Haagestraße 4, 21335 Lüneburg, Raum V2.16',
      text:
        'Sie haben keine Vorkenntnisse und möchten einfache Sätze und Anweisungen verstehen, sich auf einfache Art über notwendige Dinge und Themen verständigen, einen kurzen Text schreiben können und wissen, wie man Formulare ausfüllt? Dieser Kurs vermittelt Ihnen die dazu notwendigen Grundlagen.',
      bookmarked: false,
    },
  ],
}

export default function(state = initialState, action = {}) {
  let index, courses

  switch (action.type) {
  case ACTIONS.TOGGLE_BOOKMARK:
    index = action.payload.index
    courses = state.courses
    return {
      courses: [
        ...courses.slice(0, index),
        {
          ...courses[index],
          bookmarked: !this.state.courses.bookmarked,
        },
        ...courses.slice(index + 1),
      ],
    }
  }

  return state
}
