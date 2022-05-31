export interface IImages {
  id: number,
  backdrops: IImage[],

}

interface IImage {
  aspect_ratio: number,
  height: number,
  width: number,
  file_path: string,
}

