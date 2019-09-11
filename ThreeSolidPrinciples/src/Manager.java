class Manager {
	IWorker worker;

	public void Manager() {

	}
	public void setWorker(IWorker ) {
		worker=w;
	}

	public void manage() {
		worker.work();
	}
}