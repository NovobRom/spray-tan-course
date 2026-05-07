export interface Subsection {
  id: string
  label: string
}

export interface Section {
  id: string
  number: number
  title: string
  href: string
  description: string
  subsections: Subsection[]
}

export const sections: Section[] = [
  {
    id: 'about',
    number: 1,
    title: 'Общая информация про МЗ',
    href: '/about',
    description: 'Что такое моментальный загар, история, DHA и безопасность',
    subsections: [
      { id: 'what-is-mz', label: 'Что такое моментальный загар' },
      { id: 'history', label: 'История возникновения МЗ' },
      { id: 'dha', label: 'Что такое DHA' },
      { id: 'safety', label: 'Безопасность МЗ' },
    ],
  },
  {
    id: 'skin',
    number: 2,
    title: 'О коже',
    href: '/skin',
    description: 'Строение кожи, типы, уход и фототипы по Фитцпатрику',
    subsections: [
      { id: 'structure', label: 'Строение кожи' },
      { id: 'types', label: 'Типы кожи' },
      { id: 'care', label: 'Очищение и увлажнение' },
      { id: 'fitzpatrick', label: 'Фототипы Фитцпатрика' },
    ],
  },
  {
    id: 'lotions',
    number: 3,
    title: 'О лосьонах',
    href: '/lotions',
    description: 'Состав, процент DHA, виды, подбор под фототип и хранение',
    subsections: [
      { id: 'composition', label: 'Состав лосьона' },
      { id: 'dha-levels', label: 'Процентные показатели DHA' },
      { id: 'bronzer', label: 'Бронзатор' },
      { id: 'types', label: 'Виды лосьонов' },
      { id: 'timing', label: 'Сколько держать лосьон' },
      { id: 'selection', label: 'Подбор под фототип' },
      { id: 'storage', label: 'Расход и хранение' },
    ],
  },
  {
    id: 'products',
    number: 4,
    title: 'Дополнительные продукты',
    href: '/products',
    description: 'Биопилинг, крем-барьер и фиксирующая финиш-пудра',
    subsections: [
      { id: 'biopeeling', label: 'Биопилинг' },
      { id: 'barrier', label: 'Крем-барьер' },
      { id: 'powder', label: 'Финиш-пудра' },
    ],
  },
  {
    id: 'client-info',
    number: 5,
    title: 'Информация для клиента',
    href: '/client-info',
    description: 'Подготовка, уход после, противопоказания и как одеться',
    subsections: [
      { id: 'preparation', label: 'Подготовка к процедуре' },
      { id: 'first-shower', label: 'Первый душ' },
      { id: 'aftercare', label: 'Уход после процедуры' },
      { id: 'contraindications', label: 'Противопоказания' },
      { id: 'outfit', label: 'Как одеться на процедуру' },
    ],
  },
  {
    id: 'faq',
    number: 6,
    title: 'FAQ',
    href: '/faq',
    description: 'Шаблоны ответов клиентам на частые вопросы',
    subsections: [
      { id: 'duration', label: 'Сколько держится МЗ' },
      { id: 'before-event', label: 'Когда делать перед мероприятием' },
      { id: 'sun', label: 'Можно ли загорать с МЗ' },
      { id: 'clothes', label: 'Вымазывает ли одежду' },
      { id: 'compatibility', label: 'Совместимость с другими процедурами' },
      { id: 'depilation', label: 'Когда делать депиляцию' },
      { id: 'removal', label: 'Как смыть старый загар' },
    ],
  },
  {
    id: 'practice',
    number: 7,
    title: 'Информация для практики',
    href: '/practice',
    description: 'Этапы процедуры, техника нанесения, видео и психология',
    subsections: [
      { id: 'stages', label: 'Этапы процедуры' },
      { id: 'technique', label: 'Техника нанесения' },
      { id: 'video', label: 'Видео-инструкция' },
      { id: 'psychology', label: 'Психология общения с клиентом' },
    ],
  },
  {
    id: 'toolkit',
    number: 8,
    title: 'Базовый набор инструментов',
    href: '/toolkit',
    description: '14 инструментов мастера моментального загара',
    subsections: [
      { id: 'tools', label: 'Список инструментов' },
    ],
  },
  {
    id: 'shops',
    number: 9,
    title: 'Магазины с товарами',
    href: '/shops',
    description: '7 проверенных магазинов для закупки оборудования и лосьонов',
    subsections: [],
  },
]

export function getSectionByHref(href: string): Section | undefined {
  return sections.find((s) => s.href === href)
}

export function getPrevNext(href: string): {
  prev: Section | undefined
  next: Section | undefined
} {
  const idx = sections.findIndex((s) => s.href === href)
  return {
    prev: idx > 0 ? sections[idx - 1] : undefined,
    next: idx < sections.length - 1 ? sections[idx + 1] : undefined,
  }
}
