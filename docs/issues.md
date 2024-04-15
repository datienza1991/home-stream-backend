Issue:

```
Error during migration generation:
Error: Unable to open file: "C:\dev\personal\home-stream\home-stream-backend\src\database\data-source.ts". Cannot find module 'src/videos/model/video.entity'
```

Solution:

- Use relative path on imports
  `import { Video } from '../videos/model/video.entity';`
