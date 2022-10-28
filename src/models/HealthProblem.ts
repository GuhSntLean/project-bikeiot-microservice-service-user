import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { CredentialUser } from "./CredentialUser";

@Entity("health_problem")
class HealthProblem {
  @PrimaryColumn()
  id: string;

  @Column({ name: "medicine_allergy", type: "text" })
  medicineAllergy: string;

  @Column({ name: "health problems", type: "text" })
  healthProblems: string;

  @Column({ name: "food_allergy", type: "text" })
  foodAllergy: string;

  @OneToOne(() => CredentialUser)
  @JoinColumn({ name: "credential_id" })
  credentialId: CredentialUser;
  
  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { HealthProblem };
