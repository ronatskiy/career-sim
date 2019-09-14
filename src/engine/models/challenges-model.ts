import Challenge from "../../entities/challenge";

export default class ChallengesModel {
	private challenges: Array<Challenge> = [
		// new Challenge("Для начала Вы должны устроиться на работу", 1, { milestone: 31, salaryCount: 1 })
		// new Challenge("Для начала Вы должны устроиться на работу", 1, { milestone: 2, salaryCount: 1 }),
	];

	public addChallenge(challenge: Challenge) {
		this.challenges.push(challenge);
	}

	public hasAnyChallenge(turn: number) {
		return this.challenges.some(c => c.runOnTurn === turn);
	}

	public getAllChallenges(turn: number) {
		return this.challenges.filter(c => c.runOnTurn === turn);
	}

	public completeChallenge(id: string, _decision?) {
		const challenge = this.challenges.find(challenge => challenge.challengeId === id);

		if (challenge) {
			this.challenges = [...this.challenges.filter(c => c.challengeId !== id)];
			return challenge.onComplete(_decision);
		}

		return null;
	}
}
