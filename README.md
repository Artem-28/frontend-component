# HOWTO

## Запуск storybook

```
npm run storybbok
```

## Запуск тестов

```
npm run test
```

## Сборка библиотеки

```
npm run build:lib
```

## Запуск сборки библиотеки в режиме отладки

```
npm run debug:lib
```


Чтобы начать отлаживать библиотеку в репозитории-потребители необходимо в текущем репозитории слинковать библиотеку
следующей командой (возможно нужно запустить под администратором)

```
npm link
```

В репозитории потребителе запустить команду

```
npm link frontend-components
```

После этого можно импортировать компоненты и стили, например 

```
import { IconButton } from 'frontend-components'
```




# REFS

Reference storybooks 
* https://gitlab.com/gitlab-org/gitlab-ui
* https://github.com/storyblok/storyblok-design-system/tree/master/src


Deploy storybook to gitlab pages
* https://gist.github.com/donaldpipowitch/2590b20520b2cf6ae01aab4f7b55f8fa