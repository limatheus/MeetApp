class SubscriptionController {
  async index(req, res) {
    return res.json({ ok: true });
  }
}
export default new SubscriptionController();
