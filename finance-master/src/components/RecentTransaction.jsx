export default function RecentTransaction(){
    return(
        <div className="RecentTransaction">
            <div className="desktop-table">
                <table className="styled-table">
                <thead>
                    <tr>
                    <th rowSpan="2">Date</th>
                    <th rowSpan="2">Type</th>
                    <th rowSpan="2">Amount</th>
                    <th colSpan="3">Breakdown</th>
                    </tr>
                    <tr>
                    <th>Food</th>
                    <th>Bills</th>
                    <th>Savings</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>10-12-2024</td>
                    <td>Expenses</td>
                    <td className="right">$3000</td>
                    <td className="center">$200</td>
                    <td>$200</td>
                    <td>$500</td>
                    </tr>
                </tbody>
                </table>
            </div>

            <div className="mobile-cards">
                <div className="mobile-row">
                <p><strong>Date:</strong> 10-12-2024</p>
                <p><strong>Type:</strong> Expenses</p>
                <p><strong>Amount:</strong> $3000</p>
                <p><strong>Food:</strong> $200</p>
                <p><strong>Bills:</strong> $200</p>
                <p><strong>Savings:</strong> $500</p>
                </div>
            </div>
            </div>


    )
}