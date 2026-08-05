import type { Project } from '../types'

const video = (src: string) => ({ type: 'video' as const, src })

export const projects: Project[] = [
  {
    id: 'modum',
    title: 'Modum',
    categories: ['2D'],
    description: ['Анимация интерфейса личного кабинета «Модум-Транс» — оператора железнодорожного подвижного состава. Проект визуализирует работу цифрового сервиса: данные, статусы, управление парком и ключевые функции платформы через аккуратную UI-анимацию.'],
    media: {
      video: new URL('../2d/Modum/Main.mp4', import.meta.url).href,
      poster: new URL('../2d/Modum/pv.jpg', import.meta.url).href,
      gallery: [
        video(new URL('../2d/Modum/01.mp4', import.meta.url).href),
        video(new URL('../2d/Modum/02.mp4', import.meta.url).href),
        video(new URL('../2d/Modum/03.mp4', import.meta.url).href),
      ],
    },
  },
  {
    id: 'aghk',
    title: 'АГХК',
    categories: ['2D'],
    description: ['Видеоролик для выставки Амурского газохимического комплекса по производству базовых полимеров. Трекинг, цифровые карты, UI-графика и визуализация данных.'],
    media: {
      video: new URL('../2d/Sibur/Main.mp4', import.meta.url).href,
      poster: new URL('../2d/Sibur/pv.jpg', import.meta.url).href,
      gallery: [
        new URL('../2d/Sibur/01.jpg', import.meta.url).href,
        new URL('../2d/Sibur/02.jpg', import.meta.url).href,
        new URL('../2d/Sibur/03.jpg', import.meta.url).href,
      ],
    },
  },
  {
    id: 'waw',
    title: 'WAW',
    categories: ['2D'],
    description: ['Анимация контента для экранов выставочного пространства World Atomic Week. Проект включал подготовку динамичных экранных композиций, адаптированных под формат площадки и общий визуальный стиль мероприятия.'],
    media: {
      video: new URL('../2d/WAW/Main.mp4', import.meta.url).href,
      poster: new URL('../2d/WAW/pv.jpg', import.meta.url).href,
      gallery: [],
    },
  },
  {
    id: 'hamovniki',
    title: 'Хамовники',
    categories: ['2D'],
    description: ['Имиджевый ролик для клубного дома «Хамовники 12», презентующий архитектуру, расположение и атмосферу проекта.'],
    media: {
      video: new URL('../2d/Ham/Main.mp4', import.meta.url).href,
      poster: new URL('../2d/Ham/pv.jpg', import.meta.url).href,
      gallery: [],
    },
  },
  {
    id: 'sber-university',
    title: 'СберУниверситет',
    categories: ['2D'],
    description: ['Видео презентация итогов года для «СберУниверситета»: коллажная графика, 2D-анимация и динамичная промо-подача образовательной платформы.'],
    media: {
      video: new URL('../2d/SberUni/Main.mp4', import.meta.url).href,
      poster: new URL('../2d/SberUni/pv.jpg', import.meta.url).href,
      gallery: [
        video(new URL('../2d/SberUni/01.mp4', import.meta.url).href),
        video(new URL('../2d/SberUni/02.mp4', import.meta.url).href),
        video(new URL('../2d/SberUni/03.mp4', import.meta.url).href),
      ],
    },
  },
  {
    id: 'gotek',
    title: 'Готэк',
    categories: ['3D'],
    description: ['3D naked-eye ролик для выставочного стенда компании Готэк, производящей упаковочные материалы.'],
    media: {
      video: new URL('../3d/Gotek/Main.mp4', import.meta.url).href,
      poster: new URL('../3d/Gotek/pv.jpg', import.meta.url).href,
      gallery: [
        new URL('../3d/Gotek/01.jpg', import.meta.url).href,
        new URL('../3d/Gotek/02.jpg', import.meta.url).href,
        new URL('../3d/Gotek/03.jpg', import.meta.url).href,
      ],
    },
  },
  {
    id: 'bas',
    title: 'BAS',
    categories: ['3D'],
    description: ['Видеоролик о применении беспилотных авиационных систем в строительном проектировании. Видео показывает путь от топосъёмки и лазерного сканирования участка до построения 3D-модели местности и использования этих данных в проектной работе.'],
    media: {
      video: new URL('../3d/BAS/Main.mp4', import.meta.url).href,
      poster: new URL('../3d/BAS/pv.jpg', import.meta.url).href,
      gallery: [
        new URL('../3d/BAS/01.jpg', import.meta.url).href,
        new URL('../3d/BAS/02.jpg', import.meta.url).href,
        new URL('../3d/BAS/03.jpg', import.meta.url).href,
      ],
    },
  },
  {
    id: 'white',
    title: 'Беленькая',
    categories: ['3D'],
    description: ['3D-визуализация новой упаковки водки «Беленькая»: моделинг, материалы, свет. Задачей было показать обновлённый дизайн упаковки в чистом рекламном визуале с акцентом на форму, стекло и детали этикетки.'],
    media: {
      video: new URL('../3d/White/Main.mp4', import.meta.url).href,
      poster: new URL('../3d/White/pv.jpg', import.meta.url).href,
      gallery: [
        new URL('../3d/White/01.jpg', import.meta.url).href,
        new URL('../3d/White/02.jpg', import.meta.url).href,
        new URL('../3d/White/03.jpg', import.meta.url).href,
      ],
    },
  },
  {
    id: 'ortoline',
    title: 'Ортолайн',
    categories: ['3D'],
    description: ['Серия 3D-видеороликов для «Ортолайн»: демонстрация ортопедической продукции, её конструкции, посадки и сценариев использования.'],
    media: {
      layout: 'ortoline',
      poster: new URL('../3d/ORTO/pv.jpg', import.meta.url).href,
      gallery: [
        video(new URL('../3d/ORTO/01.mp4', import.meta.url).href),
        video(new URL('../3d/ORTO/02.mp4', import.meta.url).href),
        video(new URL('../3d/ORTO/03.mp4', import.meta.url).href),
        video(new URL('../3d/ORTO/04.mp4', import.meta.url).href),
        video(new URL('../3d/ORTO/05.mp4', import.meta.url).href),
        video(new URL('../3d/ORTO/06.mp4', import.meta.url).href),
      ],
    },
  },
  {
    id: 'tms',
    title: 'ТМС',
    categories: ['3D'],
    description: ['CGI-ролик для «Трансмехсервис» и «Develon»: механические детали, строительная техника, индустриальная атмосфера.'],
    media: {
      video: new URL('../3d/TMS/Main.mp4', import.meta.url).href,
      poster: new URL('../3d/TMS/pv.jpg', import.meta.url).href,
      gallery: [],
    },
  },
  {
    id: 'mantalis',
    title: 'Манталис',
    categories: ['AI'],
    description: ['Видеоролик для мебельного бренда Манталис', 'при совместной работе shishka.media'],
    media: {
      layout: 'mantalis',
      video: new URL('../ai/Mantalis/Main.mp4', import.meta.url).href,
      poster: new URL('../ai/Mantalis/pvV.jpg', import.meta.url).href,
      listPoster: new URL('../ai/Mantalis/pvH.jpg', import.meta.url).href,
      gallery: [
        video(new URL('../ai/Mantalis/01.mp4', import.meta.url).href),
        new URL('../ai/Mantalis/02.jpg', import.meta.url).href,
      ],
    },
  },
]
