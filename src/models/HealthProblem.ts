import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("health_problem")
class HealthProblem {
  @PrimaryColumn()
  id: string;

  @Column({ name: "comments", type: "text" })
  comments: string;

  @Column({ name: "allergies", type: "text" })
  allergies: string;

  @Column({ name: "id_user", type: "text" })
  idUser: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { HealthProblem };
