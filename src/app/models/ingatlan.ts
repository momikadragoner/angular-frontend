
export class Ingatlan {
  constructor(
    public id: Number = 0,
    public kategoriaId: Number = 0,
    public leiras: string = "",
    public hirdetesDatuma: Date = new Date(),
    public tehermentes: boolean = false,
    public kepUrl: string = ""
  ) {

  }
}
